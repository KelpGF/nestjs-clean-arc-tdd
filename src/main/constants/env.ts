export default {
  API_PORT: process.env.PORT || '3000',
  NESTJS_CLEAN_ARCH_DB_CONNECTION:
    process.env.NESTJS_CLEAN_ARCH_DB_CONNECTION ||
    'mongodb://root:root@mongo:27017/nest-clean-arch?authSource=admin',
};
