---
aliases:
- LaTeX to Unicode converter
author:
- fjdu
author_page: https://fjdu.github.io
categories: []
description: Convert LaTeX commands into unicode sqeuences
downloads: 3963
funding_page: https://www.buymeacoffee.com/fjdu
mobile: true
number: 838
title: LaTeX to Unicode converter
type: plugin
updated: '2023-03-04T14:28:33'
url: https://github.com/fjdu/obsidian-latex-unicode
version: 1.0.0
---

%% README_START %%

# Convert simple LaTeX symbols into Unicode

Obsidian supports LaTeX, but there are cases where Unicode symbols suffice.

## How it works

Run command `LaTeX to Unicode`.  In the pop-up box, type in the LaTeX commands, then insert the conversion results.

```
Input: 3^2 + 4^2 = 5^2
Output: 3² + 4² = 5²

Input: (x+y)^2 = x^2 + 2xy + y^2
Output: (x+y)² = x² + 2xy + y²

Input: H_2 + \sfrac{1}{2}O_2 \to H_2O
Output: H₂ + ½O₂ → H₂O

Input: -\mathbf{r} \times i\hbar\nabla
Output: −𝐫 × iℏ∇

Input: \sqrt(2) = 1.4142\cdots
Output: √(2) = 1.4142⋯

Input: x \in y \Rightarrow y \ni x
Output: x ∈ y ⇒ y ∋ x

Input: \mathbb{N} \equiv {1, 2, 3, \ldots}
Output: ℕ ≡ {1, 2, 3, …}
```

## Acknowledgment
- This plugin is based on [unicodeit](https://www.unicodeit.net/), specifically [this GitHub repository](https://github.com/svenkreiss/unicodeit/).  The licenses and source code of `unicodeit` are included in the directory `unicodeit`.


%% README_END %%