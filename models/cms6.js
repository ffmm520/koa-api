const oracledb = require("oracledb");
const dbConfig = require("../config/cms6.config");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// 初始化连接池
/* async function initPool() {
  let connection;
  try {
    connection = await oracledb.createPool({
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString,
      poolMax: 10,
      poolMin: 0,
      poolTimeout: 60,
    });
    // await findVendorByCode(connection);
  } catch (err) {
    console.error('init() error: ' + err.message);
  } finally {
    await closePoolAndExit();
  }
} */
// 关闭连接池
/* async function closePoolAndExit() {
  console.log('\nTerminating');
  try {
    await oracledb.getPool().close(10);
    console.log('Pool closed');
    process.exit(0);
  } catch(err) {
    console.error(err.message);
    process.exit(1);
  }
} */

// 根据供应商代码查询供应商信息
async function findVendorByCode(vcode) {
  console.log('------');
  // const { vcode } = ctx.params;
  console.log("vcode11:", vcode);
  console.log(dbConfig.user, dbConfig.password, dbConfig.connectString);
  let connection;
  try {
     connection = await oracledb.getConnection({
      user: dbConfig.user,
      password: dbConfig.password,
      connectString: dbConfig.connectString,
    }); 
    const sql = `select cstid, cstcode, dname from pub_clients where cstcode = '${vcode}'`;
    const result = await connection.execute(sql);
    console.log(result.rows);
    return result.rows[0];
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

// 根据商品代码查询商品信息
async function findGoodsByCode(goods){
  // const { goods } = ctx.params;
  let connection;
  try {
    connection = await oracledb.getConnection({
     user: dbConfig.user,
     password: dbConfig.password,
     connectString: dbConfig.connectString,
   }); 
   const sql = `select goodid, goods,name, spec,msunitno, packnum, producer from pub_waredict where goods ='${goods}'`;
   const result = await connection.execute(sql);
   return result.rows[0];
 } catch (err) {
   console.error(err);
 } finally {
   if (connection) {
     try {
       await connection.close();
     } catch (err) {
       console.error(err);
     }
   }
 }
}

module.exports = { findVendorByCode, findGoodsByCode };
