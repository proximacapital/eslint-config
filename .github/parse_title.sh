#!/bin/bash
keyword=$(echo $1 | tr '[:upper:]' '[:lower:]')
case $keyword in
    patch|minor|major|prepatch|preminor|premajor)
    echo performing a $keyword
    np --preview --no-tests --allow-any --branch main $keyword
    ;;
    *)
    np $keyword --preview --no-tests --allow-any --branch main
    ;;
esac