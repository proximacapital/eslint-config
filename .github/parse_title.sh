#!/bin/bash
cp .np-config.json ~/.np-config.json
keyword=$(echo $1 | tr '[:upper:]' '[:lower:]')
case $keyword in
    patch|minor|major|prepatch|preminor|premajor)
    echo performing a $keyword
    np $keyword
    ;;
    *)
    np --preview $keyword
    ;;
esac