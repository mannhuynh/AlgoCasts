def mysplit(strng):
    strng = strng.lstrip() 
    strng = strng.rstrip()
    lst=[]
    temp=''
    for i in strng:
        if i == ' ':
            lst.append(temp)
            temp = ''
        else:
            temp += i
    if temp:
        lst.append(temp)
    return lst
     
print(mysplit("Hello World"))
print(mysplit("   "))
print(mysplit(" abc "))
print(mysplit(""))
print(mysplit("   Hello World     "))
