# `browserslist-config-nebenan`

## What is [Browserslist](https://github.com/browserslist/browserslist)?

Share browsers list between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env.

Why ["Browserslist is a Good Idea"](https://css-tricks.com/browserlist-good-idea/), a blog post by [@chriscoyier](https://github.com/chriscoyier).

## Usage

```shell
npm install --save-dev browserslist-config-nebenan
```

Add a `.browserslistrc` with

```
# Browsers that we support.

extends browserslist-config-nebenan
```

## Supported browsers

[This link](https://browsersl.ist/#q=last+2+major+versions%2C+last+2+years%2C+%3E+1%25%2C+not+dead%2C+not+bb+%3E+0%2C+not+and_uc+%3E+0%2C+not+and_qq+%3E+0%2C+not+baidu+%3E+0%2C+not+ie+%3E+0%2C+not+ie_mob+%3E+0%2Cnot+kaios+%3E+0%2C+not+op_mob+%3E+0+%2Cnot+op_mini+all%0A)
should show the most recent list.

You can be sure to get the current list if you run this in the repo:

`npx browserslist`
