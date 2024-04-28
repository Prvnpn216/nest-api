import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [AdminModule, VendorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
