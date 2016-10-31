{
  "Bind |> Arrow Function (=>)": {
    "Search": /((this.)?\w+)\.bind\(this\)/,
    "Replace": /() => { $1(); }/,
    "Example": 'this.openModal_addtext.bind(this)  |>  () => { this.openModal_addtext(); }'
  },

  "ReactDOM.findDOMNode(ref) |> ref.node": {
    "Search": /ReactDOM.findDOMNode\((\w*).refs.(\w*)\)/,
    "Replace": /$1.$2.node/,
    "Example": 'ReactDOM.findDOMNode(this.refs.useremail)  |>  this.useremail.node'
  },

  "ref = string |> ref = arrow function": {
    "Search": /ref=\"(\w+)\"/,
    "Replace": /ref={($1) => { this.$1 = $1; }}/,
    "Example": 'ref="useremail"  |>  ref={(useremail) => { this.useremail = useremail; }}'
  }
}
