#szoveg=input()
#kecske=szoveg.split(" ")
print("Add meg a felső határt: ", end="")
szam1=int(input()) #"""kecske[0]"""
print("Add meg az alsó határt: ", end="")
szam2=int(input()) #"""kecske[1]"""
for i in range(szam1, szam2-1, -1):
    print(i, end=" ")
input()