import { BaseService } from "./base-service";
import { IVendor, IVendorView, ListingRequest, ListingResponse } from "model";

class VendorService extends BaseService {
  constructor() {
    super("vendor");
  }

  async getVendors(
    request: ListingRequest
  ): Promise<ListingResponse<IVendorView>> {
    return await super.get<ListingRequest, ListingResponse<IVendorView>>(
      "vendors",
      false,
      {
        params: {
          page: (request.offset || 0) + 1,
          limit: request.limit,
        },
      }
    );
  }

  async createVendor(payload: IVendor) {
    return await super.post<IVendor, boolean>("vendors", payload);
  }

  async loadSuggest(query: string): Promise<any> {
    const response = await super.get<string, ListingResponse<IVendorView>>(
      "vendors",
      false,
      {
        params: {
          name: query,
          page: 1,
          limit: 10,
        },
      }
    );

    return response.data.map((item) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
  }
}

export default new VendorService();
