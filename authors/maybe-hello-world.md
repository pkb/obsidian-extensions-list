---
aliases:
- '@maybehelloworld'
name: '@maybehelloworld'
type: author
url: https://github.com/maybe-hello-world
---


%% WORKS_LIST_START %%

```datacorejsx
const { AuthorWorks } = await dc.require('basement/datacore/authors.jsx');
return function View() {
    return <AuthorWorks/>
}
```
%% WORKS_LIST_END %%