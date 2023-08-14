import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { UserInfo } from "../types";

export type RootStackParamList = {
  home: UserInfo;
  profile: UserInfo;
  cart: undefined;
  menu: undefined;
};

export type HomeTabScreenProps<T extends keyof RootStackParamList> = BottomTabScreenProps<
  RootStackParamList,
  T
>;
