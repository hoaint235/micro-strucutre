import { ListingRequest, ListingResponse, ICategory } from '@models';
import { BaseService } from './base-service';

class CategoryService {
  async getCategories(
    request: ListingRequest
  ): Promise<ListingResponse<ICategory>> {
    return await BaseService.get<ListingRequest, ListingResponse<ICategory>>(
      'categories',
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
    const response = await BaseService.get<string, ListingResponse<ICategory>>(
      'categories',
      false,
      {
        params: {
          name: query,
          page: 1,
          limit: 10,
        },
      }
    );

    return response.data.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  }
}

export default new CategoryService();
