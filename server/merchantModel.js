const sql = postgres ('postgres://apimukrpmpncta:b2d64dde65be0d93d1050fd0c7d7c11705075d651ad48e6c13b1078980cde6fc@ec2-34-233-242-44.compute-1.amazonaws.com:5432/dd46dn1mpeoh1r', {
  host                 : 'ec2-34-233-242-44.compute-1.amazonaws.com',            // Postgres ip address[s] or domain name[s]
  port                 : 5432,          // Postgres server port[s]
  database             : 'dd46dn1mpeoh1r',            // Name of database to connect to
  username             : 'apimukrpmpncta',            // Username of database user
  password             : 'b2d64dde65be0d93d1050fd0c7d7c11705075d651ad48e6c13b1078980cde6fc',            // Password of database user
})
