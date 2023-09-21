# Eh to Zee Converter

https://www.npmjs.com/package/@andrew_dominican/date-lib

![npm](https://img.shields.io/npm/v/%40andrew_dominican%2Fdate-lib)
![NPM](https://img.shields.io/npm/l/%40andrew_dominican%2Fdate-lib)
![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/%40andrew_dominican%2Fdate-lib)
![GitHub issues](https://img.shields.io/github/issues/Andrew32A/Andrew32A)

### Table of Contents

- [constructor][1]
  - [Parameters][2]
- [year][3]
- [yr][4]
- [month][5]
- [mon][6]
- [day][7]
- [dy][8]
- [date][9]
- [hours][10]
- [mins][11]
- [secs][12]
- [format][13]
  - [Parameters][14]
- [when][15]

## constructor

Constructor that initializes the date object.

### Parameters

- `args` **...any** Arguments to be passed to the native Date object.

## year

Gets the full year of the date.

Returns **[number][16]** The full year.

## yr

Gets the last two digits of the year.

Returns **[string][17]** The short form of the year.

## month

Gets the full name of the month.

Returns **[string][17]** The full month name.

## mon

Gets the abbreviated form of the month.

Returns **[string][17]** The short form of the month.

## day

Gets the day of the week.

Returns **[string][17]** The name of the day.

## dy

Gets the abbreviated form of the day of the week.

Returns **[string][17]** The short form of the day name.

## date

Gets the day of the month.

Returns **[number][16]** The date.

## hours

Gets the hour of the day.

Returns **[number][16]** The hour.

## mins

Gets the minutes of the hour.

Returns **[number][16]** The minutes.

## secs

Gets the seconds of the minute.

Returns **[number][16]** The seconds.

## format

Formats the date object.

### Parameters

- `mask` **[string][17]** The mask to format the date. (optional, default `"Y M D"`)

Returns **[string][17]** The formatted date.

## when

Describes how long ago or in the future the date is.

Returns **[string][17]** A string representation of the time difference.

[1]: #constructor
[2]: #parameters
[3]: #year
[4]: #yr
[5]: #month
[6]: #mon
[7]: #day
[8]: #dy
[9]: #date
[10]: #hours
[11]: #mins
[12]: #secs
[13]: #format
[14]: #parameters-1
[15]: #when
