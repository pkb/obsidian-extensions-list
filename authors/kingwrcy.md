---
aliases:
- Jerry
funding: ''
name: Jerry
type: author
url: https://dev.mblog.club
---


%% WORKS_LIST_START %%

```datacorejsx
const { AuthorWorks } = await dc.require('basement/datacore/authors.jsx');
return function View() {
    return <AuthorWorks/>
}
```
%% WORKS_LIST_END %%