import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { UserModel } from 'src/user/user.model';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
  ) {}

  async register(dto: any) {
    const newUser = new this.userModel(dto);
    return newUser.save();
  }
}
