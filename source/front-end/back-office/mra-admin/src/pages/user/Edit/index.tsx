import { Grid } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { Pages, toastHelper } from "../../../utils";
import { AccountService } from "../../../services";
import {
  ManageUserForm,
  SkeletonTemplate,
  MainContainer,
} from "../../../components";
import { IUser } from "model";
import { useCallback, useEffect } from "react";
import { useState } from "react";

const EditUser = () => {
  const history = useHistory();
  const params: any = useParams();
  const [user, setUsers] = useState<IUser | null>(null);

  const fetchUser = useCallback(async () => {
    const useId = params?.userId;
    if (useId) {
      const response = await AccountService.getUserById(useId);
      setUsers(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: IUser) => {
    await AccountService.createUser(data);
    toastHelper.success("Create new user success");
    onBackUserList();
  };

  const onBackUserList = () => history.push(Pages.USER);

  return (
    <MainContainer title="editUserPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {user ? (
            <ManageUserForm
              onBack={onBackUserList}
              onSubmit={onSubmit}
              defaultUser={user}
            />
          ) : (
            <SkeletonTemplate.Form />
          )}
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default EditUser;
