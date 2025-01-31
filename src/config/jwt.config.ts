import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getMongoDbConfig = async (
  configService: ConfigService
): Promise<JwtModuleOptions> => {
  const secret = configService.get('JWT_SECRET');
  return {
    secret,
  };
};
