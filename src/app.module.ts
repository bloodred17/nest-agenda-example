import { AgendaModule } from '@agent-ly/nestjs-agenda';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AgendaModule.forRoot({
      db: {
        address: 'mongodb://localhost:27017/nest-agenda',
        collection: 'track_cargo_process_queue',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
