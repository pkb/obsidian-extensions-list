---
aliases:
- Laws of Form
author:
- '[[authors/Kevger|Kevin German]]'
categories: []
description: Allows you to create, manage and display Laws of Form expressions like
  ((a)) (b) = a (b).
downloads: 3224
mobile: true
number: 1010
stars: 3
title: Laws of Form
type: plugin
updated: '2023-08-11T15:52:42'
url: https://github.com/Kevger/obsidian-laws-of-form
version: 1.0.3
---

%% README_START %%

# Laws of Form Obsidian Plugin
![[exampleModulator.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampleModulator.png)

This plugin adds to [Obsidian](https://obsidian.md/) the ability to transform linear Laws of Form bracket expressions into their familiar two-dimensional graphical representation. 
An introduction to [Laws of Form](https://en.wikipedia.org/wiki/Laws_of_Form) would go beyond the scope here. It is assumed that the reader is familiar with the concepts. 

----
Useful links
- [Laws of Form Playground – React Library](https://lof-react.web.app/)
- [Authors website](https://kevingerman.de)
- [Source Code](https://github.com/Kevger/obsidian-laws-of-form)
- [LoF50](https://lof50.com/)
---

#### 🗒 Code blocks
This plugin renders the laws of form expressions inside `lof` code blocks.
Every code block starts with the `lof` keyword.

````markdown
```lof
(()) ()
```
````

This block will look rendered like the LoF formalism.
![[exampleSimple.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampleSimple.png)

---

#### Ⓞ Drawing distinctions 
1) A cross is marked with ()
```jsx
  ()
```

2) Any text in space is interpreted as the content of the space
```jsx
  ((Observer) Society)
```

3) You can nest crosses
```jsx
  ((())())
```

4) A Re-Entry is made out of two identifiers. $id and [id]. $id denotes the space that enters into [id]. id must be a number. There can be multiple $ids in a space, but only the rightmost counts.
```jsx
  (([0]a)$0b)
  (([42]$42) Autopoiesis)
```

5) A space can also re-enter into two locations (see limitations).
```jsx
  (([0]c)([0]a)$0b)
```

6) Multiple Re-Entries are also possible
```jsx
  ([3]([0]$0)([1]$1)$3)
```

7) This is how you could implement the modulator function (see the first image above)
````md
```lof font-size: 20px
  (((((((([0]a$1)$6[2])[1]$3)[0]$4)a$5)$2[6])[5]) [4]$0)
```
````

---

#### Equations & Separators
Because of the way the interpreter works, non LoF expressions (e.g., plain text, emojis) or separate LoF expressions within the *same* line must be explicitly factored out/separated. 

**Separation of expressions is needed for equations.**

For example
````
```lof
() () = () 
```
````
without separators would be rendered like this
![[exampleFalse.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampleFalse.png)
To render the expression above correctly, it must be split into three parts with the separator (by default "::") for correct display. 
````
```lof
() () :: = :: ()
```
````
This results in the correct form
![[exampleCorrect.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampleCorrect.png)
Everything between separators is just interpreted as plain text. Thus brackets "(),\[\]" and "$" will not be interpreted.
The default separator can be individually overwritten using the separator keyword in the block parameters or globally inside the settings. 

The *last unclosed* separator will move the uninterpreted text to the right. 
````
```lof font-size:24px; 
((a)b)
::=:: ((a)b)((a)b) :: C5
::=:: ((a)((b)))((a)b) :: C1
::=:: ((((a)b)a)(((a)b)(b))) :: J2
::=:: ((((a)b)a)((b))) :: C4
```
````
will lead to
![[exampleEquations.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampleEquations.png)

---

#### 🌈  Style Customization 
Using inline CSS, full customization of the expression style is possible.
For example, if we want to have a red font color, set the font size to 22 pixels and have "Chalkduster" as the font, we can do that with the following inline CSS.

````Markdown
```lof font-family: Chalkduster; font-size: 20px; color: red;
((a[0])b$0)

((aasdasdasd[0])(b[0])$0c)()

([0]$0Autopoiesis)
```
````

This block will look rendered like this

![[exampeStyling.png]](https://github.com/Kevger/obsidian-laws-of-form/blob/main/docs/exampeStyling.png)

**⚠️ Reducing the font size (e.g., font-size: 50%; font-size: 0.8em; font-size: 12px;) is the *most* important customization in case expressions are too long and wrap around.**

*Global styling can be applied inside the plugin settings.*

---

### ⚠️ Limitations

The entire drawing of the crosses and re-entries is done using divs. Each cross is a div. This allows many degrees of freedom, but this also comes with limitations, especially for the Re-Entry. HTML/CSS permits to use at most one :before and :after pseudo element (which is used for the Re-Entry) per div. Thus, for each Re-Entry we can have at most two spaces where it can re-enter. For the majority of cases, two re-enters per re-entry are perfectly sufficient. Sometimes using complicated nested Re-Entries it is necessary to rearrange expressions in case of display errors.


%% README_END %%