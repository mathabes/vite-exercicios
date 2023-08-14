var str1 = "I'd do it all over again";
    var str2 = str1.slice(10, -5);
    var str3 = str1.split(' ', 4);
    var str4 = str1.split('').reverse().join('');
    var str5 = str1.replace(/\s/g, '_');

    document.write(str1 + '<br>');
    document.write(str2 + '<br>');
    document.write(str3 + '<br>');
    document.write(str4 + '<br>');
    document.write(str5 + '<br>');