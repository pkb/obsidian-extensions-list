---
aliases:
- Calvin
name: Calvin
type: author
url: https://calvins.pizza
---


%% WORKS_LIST_START %%

```datacorejsx
const { AuthorWorks } = await dc.require('basement/datacore/authors.jsx');
return function View() {
    return <AuthorWorks/>
}
```
%% WORKS_LIST_END %%