f=open("eredmenyek.csv",encoding="utf8")
elsosor=f.readline()
for sor in f:
    print(sor)
    kecske=sor.split(';')
input()