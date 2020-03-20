#!/usr/bin/bash
ACTIONS=("Manipulation" "Master's Mend")
for ((i = 0; i < ${#ACTIONS[@]}; i++))
do
    action="${ACTIONS[$i]}"
    url=$(curl -s "https://xivapi.com/search?string=$action" | jq '.Results[0].Icon' | perl -pe 's/"//g')
    name=$(echo $action | perl -pe 's/\W*//g')
    url="https://xivapi.com/$url"
    wget -O "$name.png" $url
done
