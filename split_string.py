def mysplit(strng):
    # strng = strng.lstrip()
    # strng = strng.rstrip()
    lst = []
    temp = ''
    for i in strng:
        if i == ' ':
            lst.append(temp)
            print(lst)
            print(temp)

            temp = ''
            print("temp reset: ", temp)
        else:
            temp += i
            print('temp + i: ,', temp)
    if temp:
        print("temp is true: ", temp)
        lst.append(temp)
        print("lst final", lst)
    return lst


# print(mysplit("Hello World"))
mysplit(" Hello World")
# print(mysplit("   "))
# print(mysplit(" abc "))
# print(mysplit(""))
# print(mysplit("   Hello World     "))
