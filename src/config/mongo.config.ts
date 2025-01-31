import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoDbConfig = async (
  configService: ConfigService
): Promise<TypegooseModuleOptions> => {
  const mongoUri = configService.get('MONGO_URI');
  return {
    uri: mongoUri,
  };
};
