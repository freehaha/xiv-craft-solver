import React, { useState } from "react";
import "./App.css";
import Solver from "javascript-lp-solver";
import data from "./data/actions.json";
import Combinatorics from "js-combinatorics";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Snackbar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Alert from "@material-ui/lab/Alert";

/**
 * @typedef {Object} Action
 * @property {string} id
 * @property {count} count
 */

/**
 * @param dur - durability
 * @param manipulation - manipulation stack
 * @param {Array<Action>} sequence - sequence of action
 * @returns {Array<Action>} - re-ordered sequence
 */

data.singles = {};
Object.entries(data.sequences).forEach(([k, v]) => {
  if (!Array.isArray(v)) {
    data.singles[v] = data.actions[k];
  }
});

function validate(dur, manipulation, observes, sequence) {
  let items = [];
  let finisher = "";
  sequence.forEach(action => {
    if (action.id.startsWith("f")) {
      finisher = action.id;
      return;
    }
    items.push(action.id);
    let count = action.count - 1;
    while (count > 0) {
      items.push(action.id);
      count--;
    }
  });
  while (observes > 0) {
    items.push("ob");
    observes--;
  }
  let iter = {
    next: function() {
      return null;
    }
  };
  if (items && items.length > 0) {
    iter = Combinatorics.permutation(items);
  }
  let seq;
  while ((seq = iter.next())) {
    seq = seq.map(id => {
      return data.sequences[id];
    });
    let [d] = calcDurability(dur, manipulation, [
      ...seq,
      data.sequences[finisher]
    ]);
    if (d >= 1) {
      return [...seq, data.sequences[finisher]];
    }
  }
  return;
}

function calcDurability(dur, manipulation, seq) {
  for (let action of seq) {
    if (!action) {
      continue;
    }
    if (Array.isArray(action)) {
      [dur, manipulation] = calcDurability(dur, manipulation, action);
      if (dur < 1) {
        return [dur, 0];
      }
    } else {
      if (action === "Manipulation") {
        manipulation = 8;
        continue;
      }
      if (data.singles[action] && data.singles[action].durability) {
        dur -= data.singles[action].durability;
      }

      if (dur < 1) {
        return [dur, manipulation];
      }
      if (manipulation > 0) {
        manipulation--;
        dur += 5;
        dur = Math.min(dur, 60);
      }
    }
  }
  return [dur, manipulation];
}

const useStyles = makeStyles(theme => ({
  controlRoot: {
    "& .MuiTextField-root": {
      marginRight: theme.spacing(1)
    },
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  solutions: {
    marginTop: theme.spacing(1)
  },
  solutionHeading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium
  },
  solutionSubtitle: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

function Icon({ action }) {
  const classes = useStyles();
  const imgName = action.replace(/\W/g, "");
  return (
    <span className={classes.icon}>
      <img src={`images/actions/${imgName}.png`} alt={action} title={action} />
    </span>
  );
}

function solve(cp, durability, manipulation, observes) {
  if (durability < 0) return;
  let model = {
    optimize: "quality",
    opType: "max",
    constraints: {
      durability: {
        max: durability + 5 * manipulation - 1
      },
      ob: { max: 0 },
      cp: { max: cp - observes * 7 },
      finisher: { max: 1 }
    },
    variables: data.actions,
    ints: Object.fromEntries(Object.keys(data.actions).map(a => [a, 1]))
  };
  let results = Solver.Solve(model);
  let quality = 0;
  console.log(results);
  results = Object.entries(results)
    .filter(([k, v]) => data.sequences[k])
    .map(([id, count]) => ({ id, count }));
  let cpRemain = cp;
  results.forEach(({ id, count }) => {
    quality += count * data.actions[id].quality;
    cpRemain -= count * data.actions[id].cp;
  });
  cpRemain -= observes * 7;
  let validatedResult = validate(durability, manipulation, observes, results);
  if (validatedResult) {
    return {
      cpRemain,
      quality,
      sequence: validatedResult.flat()
    };
  } else {
    return null;
  }
}

function App() {
  const [durability, setDurability] = useState(23);
  const [cp, setCp] = useState(220);
  const [manipulation, setManipulation] = useState(0);
  const [solutions, setSolutions] = useState([]);
  const [carefulSyn, setCarefulSyn] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(true);
  const classes = useStyles();

  function handleSolve() {
    let cpAvail = cp;
    if (carefulSyn) {
      cpAvail -= 7;
    }
    let results = [
      solve(cpAvail, durability, manipulation, 0),
      solve(cpAvail, durability - 5, manipulation, 0),
      solve(cpAvail, durability, manipulation, 1),
      solve(cpAvail, durability, manipulation, 2)
    ];
    let max = null;
    for (const result of results) {
      if (!result) {
        continue;
      }
      if (!max) {
        max = result;
        continue;
      }
      if (result.quality > max.quality) {
        max = result;
      }
    }
    if (max) {
      max.hasty = max.sequence.filter(
        action => action === "Hasty Touch"
      ).length;
      setSolutions([max, ...solutions.slice(0, 5)]);
    } else {
      setShowAlert(true);
    }
  }
  return (
    <div className="App">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
      >
        <Alert color="error">No solution found.</Alert>
      </Snackbar>
      {displayInfo && (
        <Alert color="info" onClose={() => setDisplayInfo(false)}>
          This assumes you are 1 Progression step(Basic, Careful Syn) away from
          finishing with 11 Inner Quiet stacks.
        </Alert>
      )}
      <div className={classes.controlRoot}>
        <TextField
          label="Durability"
          value={durability}
          onChange={ev =>
            setDurability(Math.min(80, parseInt(ev.target.value, 10) || 0))
          }
        />
        <TextField
          label="CP"
          value={cp}
          onChange={ev =>
            setCp(Math.min(700, parseInt(ev.target.value, 10) || 0))
          }
        />
        <TextField
          label="Manipulation Stacks"
          value={manipulation}
          onChange={ev =>
            setManipulation(Math.min(8, parseInt(ev.target.value, 10) || 0))
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={carefulSyn}
              onChange={ev => setCarefulSyn(ev.target.checked)}
              label="Careful Synthesis"
            />
          }
          label="Careful Synthesis"
        />
      </div>
      <Button onClick={handleSolve} color="primary" variant="contained">
        Solve
      </Button>
      <div className={classes.solutions}>
        {solutions.map((solution, i) => {
          return (
            <ExpansionPanel defaultExpanded={true} key={i}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.solutionHeading}>
                  {" "}
                  Q:{solution.quality} H:{solution.hasty} C:{solution.cpRemain}{" "}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div>
                  <Typography className={classes.solutionSubtitle}>
                    Quality Gain {solution.quality}{" "}
                    {Boolean(solution.hasty) && (
                      <span>({solution.hasty} Hasty Touches)</span>
                    )}
                  </Typography>
                  <Typography className={classes.solutionSubtitle}>
                    CP left: {solution.cpRemain}
                  </Typography>
                  <Typography className={classes.solutionSubtitle}>
                    Steps
                  </Typography>
                  <div className={classes.solutionSteps}>
                    {solution.sequence.map((action, i) => {
                      return <Icon key={i} action={action} />;
                    })}
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    </div>
  );
}

export default App;
