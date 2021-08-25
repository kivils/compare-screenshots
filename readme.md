# Description

This is a tool to compare images in 2 directories based on [pixelmatch](https://github.com/mapbox/pixelmatch).

## Installation

- Install [nodejs](https://nodejs.org/en/download/) globally (if it's not installed yet)

- Get `compare-screenshots` tool. You have 2 options here:

**Download source files** from [here](https://github.com/kivils/compare-screenshots). 
Click on `Code` dropdown, then choose `Download ZIP`. Then extract this ZIP archive in some folder.

**OR:**

**Clone this repo** to your machine (you need [git](https://git-scm.com/) installed globally):

`git clone https://github.com/kivils/compare-screenshots`

- Open terminal in project's root folder (`compare-screenshots` in case of git installation).

- Put base images to `src/images/base` folder
- Put images which should be compared upon base images to `src/images/new` folder
- In terminal run `npm start`
  - You should see this message in terminal: `All images were compared. Please check "src/images/diff" folder`.
- Diff files are in `src/images/diff` folder

## Use cases

**Find differences in pdf file versions.**

**Steps:**

- Save base `pdf` as ``png``
- Put all generated ``png``s to `src/images/base` folder
- Save edited `pdf` as `png`
- Put all generated `png`s to `src/images/new` folder
- In terminal root folder run `npm start`
  - You should see this message in terminal: `All images were compared. Please check "src/images/diff" folder`.
- Diff files are in `src/images/diff` folder

## Requirements

- [nodejs](https://nodejs.org/en/download/) installed globally

## Restrictions

- Only `png` is supported currently
- Images in both directories should have the same filenames
- Images in both directories should have the same dimensions (resolutions)
- Treshold is set to `0.1`, it's not possible to change it manually

## TODO
- Add other formats
- Add possibility to compare files with different dimensions
