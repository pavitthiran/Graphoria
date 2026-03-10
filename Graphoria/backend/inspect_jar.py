import zipfile
jar_path=r"d:\graphoria-clone-faithful-main\graphoria-clone-faithful-main\backend\target\graphoria-backend-1.0.0.jar"
with zipfile.ZipFile(jar_path) as z:
    for name in z.namelist():
        if 'mysql' in name.lower():
            print(name)
