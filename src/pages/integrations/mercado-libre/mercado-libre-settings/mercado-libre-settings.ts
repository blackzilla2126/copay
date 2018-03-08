import { Component } from '@angular/core';

import * as _ from 'lodash';

// Providers
import { ConfigProvider } from '../../../../providers/config/config';
import { HomeIntegrationsProvider } from '../../../../providers/home-integrations/home-integrations';

@Component({
  selector: 'page-mercado-libre-settings',
  templateUrl: 'mercado-libre-settings.html',
})
export class MercadoLibreSettingsPage {

  private serviceName: string = 'mercadolibre';
  public showAtHome: any;
  public service: any;

  constructor(
    private configProvider: ConfigProvider,
    private homeIntegrationsProvider: HomeIntegrationsProvider
  ) {
    this.service = _.filter(this.homeIntegrationsProvider.get(), { name: this.serviceName });
    this.showAtHome = !!this.service[0].show;
  }

  public integrationChange(): void {
    let opts = {
      showIntegration: { [this.serviceName] : this.showAtHome }
    };
    this.homeIntegrationsProvider.updateConfig(this.serviceName, this.showAtHome);
    this.configProvider.set(opts);
  }
}
