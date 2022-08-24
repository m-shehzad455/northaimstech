---
to: src/<%=directory%>/<%=name%>/<%=name%>.spec.tsx
---

import React from 'react';
import { render } from '@testing-library/react';

import { <%= h.capitalize( h.changeCase.camel(name) ) %>} from './<%=name%>'

describe('<%= h.capitalize( h.changeCase.camel(name) ) %>', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< <%= h.capitalize( h.changeCase.camel(name) ) %> />);
    expect(baseElement).toBeTruthy();
  });
});

