// netlify/functions/hello.js
exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from Netlify Serverless Function!" })
    };
  };
  // netlify/functions/hello.js
const jwtSecret = process.env.SUPABASE_JWT_SECRET;

exports.handler = async (event, context) => {
  console.log("JWT Secret: ", jwtSecret);  // هذا سيمكنك من التحقق من قيمة المفتاح السري في سجل الأحداث

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "تم استخدام JWT Secret بنجاح!" })
  };
};
