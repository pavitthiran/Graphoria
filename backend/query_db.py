import pymysql

conn = pymysql.connect(host='localhost', user='root', password='P#6374520560p', database='graphoria')
cur = conn.cursor()
cur.execute("SELECT id, full_name, email, phone, project_type, budget, message FROM contact_requests")
rows = cur.fetchall()
print("Rows:")
for r in rows:
    print(r)
conn.close()
