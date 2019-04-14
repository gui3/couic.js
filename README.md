# couic.js

Primitive methods to do QUICK jobs

## use

**require** the couic file or **add it to your html**

### methods

For now, couic extends **Number, String, Array and Object**
with a few useful function **inspired by Ruby syntax**

```js


"milk".justifyR(10,"."); // "......milk"
"milk".justifyL(10,"~"); // "milk~~~~~~"

(7).times(function (i) {
  // do stuff with i 7 times
});

(5).upTo(10); // returns an Iterator object

(3).upTo(33).map(); // returns an array from 3 to 33
[...(3).upTo(33)]; // same thing, ECMA 6 style

(3).upTo(33).map(function (i, ix) {
  // returns an array mapped with the function
  // i from 3 to 33, ix from 0 to 30
  return -n; // will MAP from -3 to -33
});

(5).upTo(15).forEach(function (i, ix) {
  // do stuff with i and ix
})

var a = "anything (string, number, object)";
a.log(); // console.log(a)

(typeof a == "string").expect(true, "message if no match");
// will raise an error if no match
// you can send your own Error objects as parameter

"hello".forEach(l => l.log());
/*
h
e
l
l
o
*/

({a:5, b:10, c:42}).forEach( (key, value) => {
  // do stuff with key and value
});

```

## flaws & improvement

There are a **lot of flaws** since I'm not a Senior Dev,
and this file was written in a few hours
but with the help of **time** and maybe **you**
I'm sure this little file of **couic** could become handy...
