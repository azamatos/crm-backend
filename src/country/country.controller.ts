import { Body, Controller, Post, Param, Get, Patch } from '@nestjs/common';

// project imports
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() createDto: CountryCreateDTO) {
    return this.countryService.create(createDto);
  }

  @Patch()
  update(@Body() updateDto: CountryUpdateDTO) {
    return this.countryService.update(updateDto.id, updateDto);
  }

  @Get()
  getCountries() {
    return this.countryService.getAll();
  }

  @Get(':id')
  getCountryById(@Param('id') id: string) {
    return this.countryService.getById(id);
  }
}
