import { ListingRequest, ListingResponse } from "../models";
import { ICategory } from "../models/category";
import { BaseService } from "./base-service";

class CategoryService extends BaseService {
  constructor() {
    super("category");
  }

  async getCategories(
    request: ListingRequest
  ): Promise<ListingResponse<ICategory>> {
    return await super.get<ListingRequest, ListingResponse<ICategory>>(
      "categories",
      false,
      {
        params: {
          page: (request.offset || 0) + 1,
          limit: request.limit,
        },
      }
    );
  }

  async loadSuggest(query: string): Promise<ICategory[]> {
    const response = await super.get<string, ListingResponse<ICategory>>(
      "categories",
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

export default new CategoryService();
