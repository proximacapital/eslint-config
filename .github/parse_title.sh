#!/bin/bash
keyword=$(echo $1 | tr '[:upper:]' '[:lower:]')
case $keyword in
    patch|minor|major|prepatch|preminor|premajor)
    np $keyword --preview --allow-any --branch main
    ;;
    *)
    np $keyword --preview --no-tests --allow-any --branch main
    ;;
esac