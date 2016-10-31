{
  "Bind -> Arrow Function (=>)": {
    "Search": /((this.)?\w+)\.bind\(this\)/,
    "Replace": /() => { $1(); }/,
    "Example": "this.openModal_addtext.bind(this)  =>  () => { this.openModal_addtext(); }"
  }
}
