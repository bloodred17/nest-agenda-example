import { Processor, Define, Every, Schedule } from '@agent-ly/nestjs-agenda';
import { Job } from 'agenda';

interface ISayYourName {
  name: string;
}

@Processor()
export class AppProcessor {
  @Define('Say "Hello world!"')
  @Every('30 seconds')
  sayHelloWorld() {
    console.log('Hello world!');
  }

  @Define('Say "Goodbye world!"')
  @Schedule('in 1 minute')
  sayGoodbyeWorld() {
    console.log('Goodbye world!');
  }

  @Define('Say your name')
  sayYourName(job: Job<ISayYourName>) {
    console.log(`Your name is ${job.attrs.data.name}`);
  }
}
