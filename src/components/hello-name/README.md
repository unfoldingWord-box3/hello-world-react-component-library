### Simple example

```js
<HelloName name="World" />
```

### Complex example

```js
const style = {
  color: '#014263',
  display: 'inline',
  textDecoration: 'underline',
};

<>
  <HelloName name="World" style={style} />, 
  <HelloName name="🍕" style={style} />!
</>
```