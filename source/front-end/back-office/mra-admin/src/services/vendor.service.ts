import { BaseService } from "./base.service";
import { IVendor, IVendorView, ListingRequest, ListingResponse } from "model";

class VendorService extends BaseService {
  constructor() {
    super("vendor");
  }

  async getVendors(
    request: ListingRequest
  ): Promise<ListingResponse<IVendorView>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: "1",
              name: "vendor 1",
              address: "house number, district, city",
              email: "vendor1@gmail.com",
              phoneNumber: "+84123456789",
              active: true,
            },
          ],
          totalItems: 1,
        });
      }, 500);
    });
    // return await super.post<ListingRequest, ListingResponse<IVendor>>("vendors/query", request, false);
  }

  async createVendor(payload: IVendor) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
    // return await super.post<IVendor, boolean>("vendors", payload);
  }

  async loadSuggest(query: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "vendor test",
          },
          {
            id: 2,
            name: "vendor hoai",
          },
          {
            id: 3,
            name: "vendor hello",
          },
        ]);
      }, 200);
    });

    // return await super.post<string, ListingResponse<IVendor>>("vendors/query", request, false);
  }
}

export default new VendorService();
