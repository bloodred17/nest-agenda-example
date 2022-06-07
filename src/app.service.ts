import { AgendaService } from '@agent-ly/nestjs-agenda';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly agendaService: AgendaService) {
    this.agendaService.start();
  }

  async sayYourName(name: string) {
    const result = await this.agendaService.now('Say your name', { name });
    return {
      message: result,
    };
  }

  getHello(): string {
    return 'Hello World!';
  }
}
