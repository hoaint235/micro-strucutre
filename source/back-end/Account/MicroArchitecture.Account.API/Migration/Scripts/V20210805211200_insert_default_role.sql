INSERT INTO role(id, name, type)
VALUES
('b20dae0f-c71d-45e3-bb1d-d8a681125694', 'Admin', 1),
('87927bd4-9167-4b35-8745-0ebf2cbf4f30', 'Master Data', 2),
('892d4bb3-034d-4169-b2ad-77f8ef1426b3', 'manager', 3),
('197e3aee-cd99-4d93-9627-80ea1d0a7a22', 'user', 4);

INSERT INTO permission(id, name, lowered_name) 
VALUES 
('9644fcf1-bb35-4d21-b00d-47b6fe91f66b', 'Account-View', 'account-view'),
('b693af02-0990-4033-99f4-f72bcb1cc114', 'Account-Add', 'account-add'),
('51f4170f-58b3-4e7f-8c87-bfd65f56e216', 'Account-Edit', 'account-edit'),
('0c959098-3750-4f31-8906-51971cf7285f', 'Account-Delete', 'account-delete'),
('bd5f4cc8-b0f2-4610-8ff1-27a88245a915', 'Vendor-View', 'vendor-view'),
('70a3a912-a1e1-49d6-9893-0c105bbb262b', 'Vendor-Add', 'vendor-add'),
('6d106fe2-1fd4-4cc7-bfd1-2dd09e06039e', 'Vendor-Edit', 'vendor-edit'),
('c89a03da-cbfe-4c53-874e-a64df205210a', 'Vendor-Delete', 'vendor-delete'),
('a21a567f-e2fa-40ae-a974-5d94f78201b6', 'Product-View', 'product-view'),
('3f98428f-4f4c-4fd5-be3c-0982f799e0a1', 'Product-Add', 'product-add'),
('1b772d4b-8d07-42d8-b5d7-56157175bc73', 'Product-Edit', 'product-edit'),
('5400c91c-fc40-4b5b-9bfd-6805e708684c', 'Product-Delete', 'product-delete'),
('641d8c79-c7c4-40bb-b172-288801694b9e', 'Unit-View', 'unit-view'),
('618427e9-af01-4214-bf77-3b83a8f6ad1d', 'Unit-Add', 'unit-add'),
('77d51acc-6ed2-4e29-be01-d790ae6e12d4', 'Unit-Edit', 'unit-edit'),
('38df6c08-d2e2-4109-97c0-8a0fb53ab34a', 'Unit-Delete', 'unit-delete'),
('3ff027f5-dcb0-4703-9a52-aab37cf78160', 'Category-View', 'category-view'),
('c2461fc7-86a0-42cc-acf4-568f19dfccc6', 'Category-Add', 'category-add'),
('f7486e88-d190-487e-ae24-c96a894354b0', 'Category-Edit', 'category-edit'),
('355e20ac-06aa-41f0-8c7f-cfacc4e68b55', 'Category-Delete', 'category-delete'),
('5535350c-0605-47d9-9602-ea3f56a52c7c', 'Permission-View', 'permission-view'),
('363867a5-a80c-405c-a1c2-6c0fba4c05ec', 'Permission-Edit', 'permission-edit');

INSERT INTO role_permission(id, role_id, permission_id, is_active) 
VALUES 
('05c7027c-cfe0-4c84-b042-aed5a911d859', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '9644fcf1-bb35-4d21-b00d-47b6fe91f66b', true),
('c5ad6d22-0394-4565-83a4-666ae01568ff', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', 'b693af02-0990-4033-99f4-f72bcb1cc114', true),
('6ea4924f-db37-4ad4-8db2-4653bb1983d5', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '51f4170f-58b3-4e7f-8c87-bfd65f56e216', true),
('3f25617a-576b-4b0a-9f32-1e0bf48e2da6', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '0c959098-3750-4f31-8906-51971cf7285f', true),
('a7886d20-ba33-4d0e-aeaf-40daa59387cd', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', 'bd5f4cc8-b0f2-4610-8ff1-27a88245a915', true),
('def53791-5f32-4308-9567-8664bd92297c', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '70a3a912-a1e1-49d6-9893-0c105bbb262b', true),
('cfae63e2-150d-4ee6-8bad-d14400faa2e8', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '6d106fe2-1fd4-4cc7-bfd1-2dd09e06039e', true),
('35db6cc5-3440-4526-bd66-2ce352a64da1', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', 'c89a03da-cbfe-4c53-874e-a64df205210a', true),
('2e19846b-dd31-496b-b633-35ee8de769f4', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', 'a21a567f-e2fa-40ae-a974-5d94f78201b6', true),
('03a0981d-d227-4b0e-960d-b6102727003c', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '3f98428f-4f4c-4fd5-be3c-0982f799e0a1', true),
('d0968713-3948-49c3-bafc-8770780a496d', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '1b772d4b-8d07-42d8-b5d7-56157175bc73', true),
('46962553-44f0-48d0-822d-81b17884b964', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '5400c91c-fc40-4b5b-9bfd-6805e708684c', true),
('8ea37dfd-9b64-4189-a849-a07b9fd87c99', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '641d8c79-c7c4-40bb-b172-288801694b9e', true),
('639ecc31-31c8-4f23-9b76-3b6a4cc23620', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '618427e9-af01-4214-bf77-3b83a8f6ad1d', true),
('ea93ccc8-2222-4c48-b90e-6b618aa3bd1f', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '77d51acc-6ed2-4e29-be01-d790ae6e12d4', true),
('0a3151d3-dfdc-4952-bd09-7def28c09f0a', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '38df6c08-d2e2-4109-97c0-8a0fb53ab34a', true),
('0e1891b8-34b6-4cb1-be97-99d3dd92e610', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '3ff027f5-dcb0-4703-9a52-aab37cf78160', true),
('fc7d7113-6843-4b6d-8f70-5fd186e13578', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', 'c2461fc7-86a0-42cc-acf4-568f19dfccc6', true),
('6a60baa4-86dd-4093-b97f-e2b80745ca00', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', 'f7486e88-d190-487e-ae24-c96a894354b0', true),
('083063fd-5532-4998-939f-102432d05d2e', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '355e20ac-06aa-41f0-8c7f-cfacc4e68b55', true),
('2cf20851-8c9a-4abc-9c1f-850b021961e0', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '5535350c-0605-47d9-9602-ea3f56a52c7c', true),
('84742ff6-2a90-400c-bdcb-409dc7e01950', 'b20dae0f-c71d-45e3-bb1d-d8a681125694', '363867a5-a80c-405c-a1c2-6c0fba4c05ec', true);