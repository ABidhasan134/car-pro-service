// lib/cors.js
export function corsHeaders() {
    return {
      'Access-Control-Allow-Origin': '*', // Or specify your domain instead of '*'
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };
  }
  