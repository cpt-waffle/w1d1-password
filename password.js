function obfuscate(pass)
{
  var newPass = "";

  for (var i = 0; i < pass.length; i++)
  {
    if (pass[i] === 'a')
      newPass += '4';
    else if (pass[i] === 'e')
      newPass += '3';
    else if (pass[i] === 'o')
      newPass += '0';
    else if (pass[i] === 'l')
      newPass += '1';
    else
      newPass += pass[i];
  }

  return newPass;
}

//console.log(obfuscate(process.argv[2]));