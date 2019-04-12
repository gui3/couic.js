# couic.js

Primitive methods to do QUICK jobs

## use

**require** the couic file or **add it to your html**

### methods

For now, **couic** extends Number, String, Array and Object
with a few useful function **inspired by Ruby syntax**

```js

"milk".justifyR(10,"."); // "......milk"
"milk".justifyL(10,"~"); // "milk~~~~~~"

(7).times(function (n) {
  // do stuff 7 times
});

(5).upTo(10); // returns an array from 5 to 15

(3).upTo(33, (n, ix)=>{ // to loop only ONCE
  // do stuff with n from 3 to 33
  // or with ix from 0 to 30
  return -n; // will MAP from -3 to -33
});
// if the function does not returns, or returns undefined
// the mapped value will be n

var a = "anything (string, number, object)";
a.log(); // console.log(a)

(typeof a == "string").expect(true, "message if no match");
//will raise an error if no match

"hello".forEach(l => l.log());
/*
h
e
l
l
o
*/

({
  a:5,
  b:10,
  c:42
}).forEach( (key, value) => {
  // do stuff with key and value
});

```

## flaws & improvement

There are a **lot of flaws** since I'm not a Senior Dev,
and this file was written in a few hours
but with the help of **time** and maybe **you**
I'm sure this little file of **couic** could become handy...
