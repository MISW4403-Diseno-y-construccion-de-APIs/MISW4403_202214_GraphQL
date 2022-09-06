import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumEntity } from './museum.entity';
import { MuseumService } from './museum.service';
import { MuseumController } from './museum.controller';
import { MuseumResolver } from './museum.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([MuseumEntity])],
  providers: [MuseumService, MuseumResolver],
  controllers: [MuseumController],
})
export class MuseumModule {}
