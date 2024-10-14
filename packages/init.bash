#! /bin/bash
mkdir components hooks docs core utils theme

for i in components hooks docs core utils theme; do
    cd $i
    pnpm init
    cd ..
done
