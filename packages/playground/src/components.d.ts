/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  BigNumber,
  BigNumberish,
} from 'ethers/utils';
import {
  AppDefinition,
  ErrorMessage,
  UserSession,
} from './types';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';
import {
  Signer,
} from 'ethers';
import {
  Web3Provider,
} from 'ethers/providers';
import {
  AccountState,
} from './data/account';
import {
  WalletState,
} from './data/wallet';


export namespace Components {

  interface AccountDeposit {
    'canUseApps': Boolean;
    'deposit': (valueInWei: BigNumber) => void;
    'ethWeb3WalletBalance': BigNumberish;
    'history': RouterHistory;
    'signer': Signer;
    'updateAccount': (e) => void;
    'user': UserSession;
  }
  interface AccountDepositAttributes extends StencilHTMLAttributes {
    'canUseApps'?: Boolean;
    'deposit'?: (valueInWei: BigNumber) => void;
    'ethWeb3WalletBalance'?: BigNumberish;
    'history'?: RouterHistory;
    'signer'?: Signer;
    'updateAccount'?: (e) => void;
    'user'?: UserSession;
  }

  interface AccountEdit {
    'history': RouterHistory;
    'logout': () => void;
    'updateAccount': (e) => void;
    'user': UserSession;
  }
  interface AccountEditAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'logout'?: () => void;
    'updateAccount'?: (e) => void;
    'user'?: UserSession;
  }

  interface AccountEthForm {
    'autofocus': boolean;
    'available': BigNumberish;
    'button': string;
    'disabled': boolean;
    'error': string;
    'header': string;
    'loading': boolean;
    'max': number;
    'min': number;
    'provideFaucetLink': boolean;
    'value': string | number;
  }
  interface AccountEthFormAttributes extends StencilHTMLAttributes {
    'autofocus'?: boolean;
    'available'?: BigNumberish;
    'button'?: string;
    'disabled'?: boolean;
    'error'?: string;
    'header'?: string;
    'loading'?: boolean;
    'max'?: number;
    'min'?: number;
    'onSubmit'?: (event: CustomEvent) => void;
    'provideFaucetLink'?: boolean;
    'value'?: string | number;
  }

  interface AccountExchange {
    'deposit': (value: string) => Promise<any>;
    'ethFreeBalanceWei': BigNumberish;
    'ethMultisigBalance': BigNumberish;
    'ethPendingDepositAmountWei': BigNumberish;
    'ethPendingDepositTxHash': string;
    'ethPendingWithdrawalAmountWei': BigNumberish;
    'ethPendingWithdrawalTxHash': string;
    'ethWeb3WalletBalance': BigNumberish;
    'getBalances': () => Promise<
    { ethMultisigBalance: BigNumber; ethFreeBalanceWei: BigNumber } | undefined
    >;
    'getEtherscanAddressURL': (address: string) => string;
    'getEtherscanTxURL': (tx: string) => string;
    'history': RouterHistory;
    'network': string;
    'updateAccount': (e) => void;
    'user': UserSession;
    'withdraw': (value: string) => Promise<void>;
  }
  interface AccountExchangeAttributes extends StencilHTMLAttributes {
    'deposit'?: (value: string) => Promise<any>;
    'ethFreeBalanceWei'?: BigNumberish;
    'ethMultisigBalance'?: BigNumberish;
    'ethPendingDepositAmountWei'?: BigNumberish;
    'ethPendingDepositTxHash'?: string;
    'ethPendingWithdrawalAmountWei'?: BigNumberish;
    'ethPendingWithdrawalTxHash'?: string;
    'ethWeb3WalletBalance'?: BigNumberish;
    'getBalances'?: () => Promise<
    { ethMultisigBalance: BigNumber; ethFreeBalanceWei: BigNumber } | undefined
    >;
    'getEtherscanAddressURL'?: (address: string) => string;
    'getEtherscanTxURL'?: (tx: string) => string;
    'history'?: RouterHistory;
    'network'?: string;
    'updateAccount'?: (e) => void;
    'user'?: UserSession;
    'withdraw'?: (value: string) => Promise<void>;
  }

  interface AccountRegister {
    'connected': boolean;
    'history': RouterHistory;
    'metamaskUnlocked': boolean;
    'signer': Signer;
    'updateAccount': (e) => void;
    'user': UserSession;
    'waitForMultisig': () => Promise<void>;
  }
  interface AccountRegisterAttributes extends StencilHTMLAttributes {
    'connected'?: boolean;
    'history'?: RouterHistory;
    'metamaskUnlocked'?: boolean;
    'signer'?: Signer;
    'updateAccount'?: (e) => void;
    'user'?: UserSession;
    'waitForMultisig'?: () => Promise<void>;
  }

  interface AppHome {
    'apps': AppDefinition[];
    'canUseApps': boolean;
    'deleteAccount'?: () => Promise<void>;
    'enoughCounterpartyBalance': boolean;
    'enoughLocalBalance': boolean;
    'ethPendingDepositAmountWei': any;
    'ethPendingDepositTxHash': string;
    'hasCorruptStateChannelState': boolean;
    'hasDetectedNetwork': boolean;
    'hasLocalStorage': boolean;
    'history': RouterHistory;
    'networkPermitted': boolean;
    'user': UserSession;
    'web3Detected': boolean;
  }
  interface AppHomeAttributes extends StencilHTMLAttributes {
    'apps'?: AppDefinition[];
    'canUseApps'?: boolean;
    'deleteAccount'?: () => Promise<void>;
    'enoughCounterpartyBalance'?: boolean;
    'enoughLocalBalance'?: boolean;
    'ethPendingDepositAmountWei'?: any;
    'ethPendingDepositTxHash'?: string;
    'hasCorruptStateChannelState'?: boolean;
    'hasDetectedNetwork'?: boolean;
    'hasLocalStorage'?: boolean;
    'history'?: RouterHistory;
    'networkPermitted'?: boolean;
    'user'?: UserSession;
    'web3Detected'?: boolean;
  }

  interface AppsListItem {
    'canUseApps': boolean;
    'icon': string;
    'name': string;
    'notifications': number | null;
    'url': string;
  }
  interface AppsListItemAttributes extends StencilHTMLAttributes {
    'canUseApps'?: boolean;
    'icon'?: string;
    'name'?: string;
    'notifications'?: number | null;
    'onAppClicked'?: (event: CustomEvent) => void;
    'url'?: string;
  }

  interface AppsList {
    'apps': AppDefinition[];
    'name': string;
    'user': UserSession;
  }
  interface AppsListAttributes extends StencilHTMLAttributes {
    'apps'?: AppDefinition[];
    'name'?: string;
    'onAppClicked'?: (event: CustomEvent) => void;
    'user'?: UserSession;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface DappContainer {
    'apps': AppDefinition[];
    'ethMultisigBalance': BigNumber;
    'getBalances': () => Promise<
    { ethMultisigBalance: BigNumber; ethFreeBalanceWei: BigNumber } | undefined
    >;
    'history': RouterHistory;
    'match': MatchResults;
    'url': string;
    'user': UserSession;
  }
  interface DappContainerAttributes extends StencilHTMLAttributes {
    'apps'?: AppDefinition[];
    'ethMultisigBalance'?: BigNumber;
    'getBalances'?: () => Promise<
    { ethMultisigBalance: BigNumber; ethFreeBalanceWei: BigNumber } | undefined
    >;
    'history'?: RouterHistory;
    'match'?: MatchResults;
    'url'?: string;
    'user'?: UserSession;
  }

  interface FormButton {
    'disabled': boolean;
    'spinner': boolean;
  }
  interface FormButtonAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'onButtonPressed'?: (event: CustomEvent) => void;
    'spinner'?: boolean;
  }

  interface FormContainer {}
  interface FormContainerAttributes extends StencilHTMLAttributes {
    'onFormSubmitted'?: (event: CustomEvent) => void;
  }

  interface FormInput {
    'autofocus': boolean;
    'disabled': boolean;
    'error': string;
    'label': string;
    'max': number;
    'min': number;
    'step': number;
    'type': string;
    'unit': string;
    'value': string | number;
  }
  interface FormInputAttributes extends StencilHTMLAttributes {
    'autofocus'?: boolean;
    'disabled'?: boolean;
    'error'?: string;
    'label'?: string;
    'max'?: number;
    'min'?: number;
    'onChange'?: (event: CustomEvent) => void;
    'step'?: number;
    'type'?: string;
    'unit'?: string;
    'value'?: string | number;
  }

  interface HeaderAccountInfo {
    'content': string;
    'header': string;
    'spinner': boolean;
    'src': string;
    'tooltip': string;
  }
  interface HeaderAccountInfoAttributes extends StencilHTMLAttributes {
    'content'?: string;
    'header'?: string;
    'spinner'?: boolean;
    'src'?: string;
    'tooltip'?: string;
  }

  interface HeaderAccount {
    'authenticated': boolean;
    'autoLogin': () => Promise<void>;
    'error': { primary: string; secondary: string };
    'hasCorruptStateChannelState': boolean;
    'hasDetectedNetwork': boolean;
    'login': () => Promise<UserSession>;
    'metamaskUnlocked': boolean;
    'network': string;
    'networkPermitted': boolean;
    'updateAccount': (e) => void;
    'user': UserSession;
    'web3Detected': boolean;
  }
  interface HeaderAccountAttributes extends StencilHTMLAttributes {
    'authenticated'?: boolean;
    'autoLogin'?: () => Promise<void>;
    'error'?: { primary: string; secondary: string };
    'hasCorruptStateChannelState'?: boolean;
    'hasDetectedNetwork'?: boolean;
    'login'?: () => Promise<UserSession>;
    'metamaskUnlocked'?: boolean;
    'network'?: string;
    'networkPermitted'?: boolean;
    'onAuthenticationChanged'?: (event: CustomEvent) => void;
    'updateAccount'?: (e) => void;
    'user'?: UserSession;
    'web3Detected'?: boolean;
  }

  interface HeaderBalance {
    'ethFreeBalanceWei': BigNumberish;
    'ethPendingDepositAmountWei'?: number;
    'user': UserSession;
  }
  interface HeaderBalanceAttributes extends StencilHTMLAttributes {
    'ethFreeBalanceWei'?: BigNumberish;
    'ethPendingDepositAmountWei'?: number;
    'user'?: UserSession;
  }

  interface HeaderContent {
    'opened': boolean;
  }
  interface HeaderContentAttributes extends StencilHTMLAttributes {
    'onCloseDrawer'?: (event: CustomEvent) => void;
    'opened'?: boolean;
  }

  interface HeaderDrawer {
    'opened': boolean;
  }
  interface HeaderDrawerAttributes extends StencilHTMLAttributes {
    'onCloseDrawer'?: (event: CustomEvent) => void;
    'opened'?: boolean;
  }

  interface LayoutHeader {}
  interface LayoutHeaderAttributes extends StencilHTMLAttributes {}

  interface DialogInsufficientFunds {
    'message': any;
    'onDeposit': () => void;
    'onReject': () => void;
  }
  interface DialogInsufficientFundsAttributes extends StencilHTMLAttributes {
    'message'?: any;
    'onDeposit'?: () => void;
    'onReject'?: () => void;
  }

  interface DialogProposeInstall {
    'apps': AppDefinition[];
    'message': any;
    'onAccept': (message: any) => void;
    'onReject': () => void;
  }
  interface DialogProposeInstallAttributes extends StencilHTMLAttributes {
    'apps'?: AppDefinition[];
    'message'?: any;
    'onAccept'?: (message: any) => void;
    'onReject'?: () => void;
  }

  interface DialogRejectInstall {
    'message': any;
    'onOKClicked': () => void;
    'onReject': () => void;
  }
  interface DialogRejectInstallAttributes extends StencilHTMLAttributes {
    'message'?: any;
    'onOKClicked'?: () => void;
    'onReject'?: () => void;
  }

  interface NodeListener {
    'apps': AppDefinition[];
    'ethMultisigBalance': BigNumber;
    'history': RouterHistory;
    'provider': Web3Provider;
    'web3Detected': boolean;
  }
  interface NodeListenerAttributes extends StencilHTMLAttributes {
    'apps'?: AppDefinition[];
    'ethMultisigBalance'?: BigNumber;
    'history'?: RouterHistory;
    'provider'?: Web3Provider;
    'web3Detected'?: boolean;
  }

  interface WebthreeConnector {
    'accountState': AccountState;
    'walletState': WalletState;
  }
  interface WebthreeConnectorAttributes extends StencilHTMLAttributes {
    'accountState'?: AccountState;
    'walletState'?: WalletState;
  }

  interface WidgetCard {}
  interface WidgetCardAttributes extends StencilHTMLAttributes {}

  interface WidgetConnection {
    'hasDetectedNetwork': boolean;
    'metamaskUnlocked': boolean;
    'network': string;
  }
  interface WidgetConnectionAttributes extends StencilHTMLAttributes {
    'hasDetectedNetwork'?: boolean;
    'metamaskUnlocked'?: boolean;
    'network'?: string;
  }

  interface WidgetDevFlags {}
  interface WidgetDevFlagsAttributes extends StencilHTMLAttributes {}

  interface WidgetDialog {
    'content': JSX.Element;
    'contentClass': string;
    'dialogClass': string;
    'dialogTitle': string;
    'icon': string;
    'primaryButtonText': string;
    'secondaryButtonText': string;
    'visible': boolean;
  }
  interface WidgetDialogAttributes extends StencilHTMLAttributes {
    'content'?: JSX.Element;
    'contentClass'?: string;
    'dialogClass'?: string;
    'dialogTitle'?: string;
    'icon'?: string;
    'onPrimaryButtonClicked'?: (event: CustomEvent) => void;
    'onSecondaryButtonClicked'?: (event: CustomEvent) => void;
    'primaryButtonText'?: string;
    'secondaryButtonText'?: string;
    'visible'?: boolean;
  }

  interface WidgetErrorMessage {
    'error': ErrorMessage;
  }
  interface WidgetErrorMessageAttributes extends StencilHTMLAttributes {
    'error'?: ErrorMessage;
  }

  interface WidgetHeader {}
  interface WidgetHeaderAttributes extends StencilHTMLAttributes {}

  interface WidgetLogo {
    'caption': string;
  }
  interface WidgetLogoAttributes extends StencilHTMLAttributes {
    'caption'?: string;
  }

  interface WidgetScreen {
    'exitable': boolean;
  }
  interface WidgetScreenAttributes extends StencilHTMLAttributes {
    'exitable'?: boolean;
  }

  interface WidgetSpinner {
    'color': "black" | "white";
    'content': JSX.Element;
    'type': "circle" | "dots";
    'visible': boolean;
  }
  interface WidgetSpinnerAttributes extends StencilHTMLAttributes {
    'color'?: "black" | "white";
    'content'?: JSX.Element;
    'type'?: "circle" | "dots";
    'visible'?: boolean;
  }

  interface WidgetTooltip {
    'message': string;
  }
  interface WidgetTooltipAttributes extends StencilHTMLAttributes {
    'message'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AccountDeposit': Components.AccountDeposit;
    'AccountEdit': Components.AccountEdit;
    'AccountEthForm': Components.AccountEthForm;
    'AccountExchange': Components.AccountExchange;
    'AccountRegister': Components.AccountRegister;
    'AppHome': Components.AppHome;
    'AppsListItem': Components.AppsListItem;
    'AppsList': Components.AppsList;
    'AppRoot': Components.AppRoot;
    'DappContainer': Components.DappContainer;
    'FormButton': Components.FormButton;
    'FormContainer': Components.FormContainer;
    'FormInput': Components.FormInput;
    'HeaderAccountInfo': Components.HeaderAccountInfo;
    'HeaderAccount': Components.HeaderAccount;
    'HeaderBalance': Components.HeaderBalance;
    'HeaderContent': Components.HeaderContent;
    'HeaderDrawer': Components.HeaderDrawer;
    'LayoutHeader': Components.LayoutHeader;
    'DialogInsufficientFunds': Components.DialogInsufficientFunds;
    'DialogProposeInstall': Components.DialogProposeInstall;
    'DialogRejectInstall': Components.DialogRejectInstall;
    'NodeListener': Components.NodeListener;
    'WebthreeConnector': Components.WebthreeConnector;
    'WidgetCard': Components.WidgetCard;
    'WidgetConnection': Components.WidgetConnection;
    'WidgetDevFlags': Components.WidgetDevFlags;
    'WidgetDialog': Components.WidgetDialog;
    'WidgetErrorMessage': Components.WidgetErrorMessage;
    'WidgetHeader': Components.WidgetHeader;
    'WidgetLogo': Components.WidgetLogo;
    'WidgetScreen': Components.WidgetScreen;
    'WidgetSpinner': Components.WidgetSpinner;
    'WidgetTooltip': Components.WidgetTooltip;
  }

  interface StencilIntrinsicElements {
    'account-deposit': Components.AccountDepositAttributes;
    'account-edit': Components.AccountEditAttributes;
    'account-eth-form': Components.AccountEthFormAttributes;
    'account-exchange': Components.AccountExchangeAttributes;
    'account-register': Components.AccountRegisterAttributes;
    'app-home': Components.AppHomeAttributes;
    'apps-list-item': Components.AppsListItemAttributes;
    'apps-list': Components.AppsListAttributes;
    'app-root': Components.AppRootAttributes;
    'dapp-container': Components.DappContainerAttributes;
    'form-button': Components.FormButtonAttributes;
    'form-container': Components.FormContainerAttributes;
    'form-input': Components.FormInputAttributes;
    'header-account-info': Components.HeaderAccountInfoAttributes;
    'header-account': Components.HeaderAccountAttributes;
    'header-balance': Components.HeaderBalanceAttributes;
    'header-content': Components.HeaderContentAttributes;
    'header-drawer': Components.HeaderDrawerAttributes;
    'layout-header': Components.LayoutHeaderAttributes;
    'dialog-insufficient-funds': Components.DialogInsufficientFundsAttributes;
    'dialog-propose-install': Components.DialogProposeInstallAttributes;
    'dialog-reject-install': Components.DialogRejectInstallAttributes;
    'node-listener': Components.NodeListenerAttributes;
    'webthree-connector': Components.WebthreeConnectorAttributes;
    'widget-card': Components.WidgetCardAttributes;
    'widget-connection': Components.WidgetConnectionAttributes;
    'widget-dev-flags': Components.WidgetDevFlagsAttributes;
    'widget-dialog': Components.WidgetDialogAttributes;
    'widget-error-message': Components.WidgetErrorMessageAttributes;
    'widget-header': Components.WidgetHeaderAttributes;
    'widget-logo': Components.WidgetLogoAttributes;
    'widget-screen': Components.WidgetScreenAttributes;
    'widget-spinner': Components.WidgetSpinnerAttributes;
    'widget-tooltip': Components.WidgetTooltipAttributes;
  }


  interface HTMLAccountDepositElement extends Components.AccountDeposit, HTMLStencilElement {}
  var HTMLAccountDepositElement: {
    prototype: HTMLAccountDepositElement;
    new (): HTMLAccountDepositElement;
  };

  interface HTMLAccountEditElement extends Components.AccountEdit, HTMLStencilElement {}
  var HTMLAccountEditElement: {
    prototype: HTMLAccountEditElement;
    new (): HTMLAccountEditElement;
  };

  interface HTMLAccountEthFormElement extends Components.AccountEthForm, HTMLStencilElement {}
  var HTMLAccountEthFormElement: {
    prototype: HTMLAccountEthFormElement;
    new (): HTMLAccountEthFormElement;
  };

  interface HTMLAccountExchangeElement extends Components.AccountExchange, HTMLStencilElement {}
  var HTMLAccountExchangeElement: {
    prototype: HTMLAccountExchangeElement;
    new (): HTMLAccountExchangeElement;
  };

  interface HTMLAccountRegisterElement extends Components.AccountRegister, HTMLStencilElement {}
  var HTMLAccountRegisterElement: {
    prototype: HTMLAccountRegisterElement;
    new (): HTMLAccountRegisterElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppsListItemElement extends Components.AppsListItem, HTMLStencilElement {}
  var HTMLAppsListItemElement: {
    prototype: HTMLAppsListItemElement;
    new (): HTMLAppsListItemElement;
  };

  interface HTMLAppsListElement extends Components.AppsList, HTMLStencilElement {}
  var HTMLAppsListElement: {
    prototype: HTMLAppsListElement;
    new (): HTMLAppsListElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLDappContainerElement extends Components.DappContainer, HTMLStencilElement {}
  var HTMLDappContainerElement: {
    prototype: HTMLDappContainerElement;
    new (): HTMLDappContainerElement;
  };

  interface HTMLFormButtonElement extends Components.FormButton, HTMLStencilElement {}
  var HTMLFormButtonElement: {
    prototype: HTMLFormButtonElement;
    new (): HTMLFormButtonElement;
  };

  interface HTMLFormContainerElement extends Components.FormContainer, HTMLStencilElement {}
  var HTMLFormContainerElement: {
    prototype: HTMLFormContainerElement;
    new (): HTMLFormContainerElement;
  };

  interface HTMLFormInputElement extends Components.FormInput, HTMLStencilElement {}
  var HTMLFormInputElement: {
    prototype: HTMLFormInputElement;
    new (): HTMLFormInputElement;
  };

  interface HTMLHeaderAccountInfoElement extends Components.HeaderAccountInfo, HTMLStencilElement {}
  var HTMLHeaderAccountInfoElement: {
    prototype: HTMLHeaderAccountInfoElement;
    new (): HTMLHeaderAccountInfoElement;
  };

  interface HTMLHeaderAccountElement extends Components.HeaderAccount, HTMLStencilElement {}
  var HTMLHeaderAccountElement: {
    prototype: HTMLHeaderAccountElement;
    new (): HTMLHeaderAccountElement;
  };

  interface HTMLHeaderBalanceElement extends Components.HeaderBalance, HTMLStencilElement {}
  var HTMLHeaderBalanceElement: {
    prototype: HTMLHeaderBalanceElement;
    new (): HTMLHeaderBalanceElement;
  };

  interface HTMLHeaderContentElement extends Components.HeaderContent, HTMLStencilElement {}
  var HTMLHeaderContentElement: {
    prototype: HTMLHeaderContentElement;
    new (): HTMLHeaderContentElement;
  };

  interface HTMLHeaderDrawerElement extends Components.HeaderDrawer, HTMLStencilElement {}
  var HTMLHeaderDrawerElement: {
    prototype: HTMLHeaderDrawerElement;
    new (): HTMLHeaderDrawerElement;
  };

  interface HTMLLayoutHeaderElement extends Components.LayoutHeader, HTMLStencilElement {}
  var HTMLLayoutHeaderElement: {
    prototype: HTMLLayoutHeaderElement;
    new (): HTMLLayoutHeaderElement;
  };

  interface HTMLDialogInsufficientFundsElement extends Components.DialogInsufficientFunds, HTMLStencilElement {}
  var HTMLDialogInsufficientFundsElement: {
    prototype: HTMLDialogInsufficientFundsElement;
    new (): HTMLDialogInsufficientFundsElement;
  };

  interface HTMLDialogProposeInstallElement extends Components.DialogProposeInstall, HTMLStencilElement {}
  var HTMLDialogProposeInstallElement: {
    prototype: HTMLDialogProposeInstallElement;
    new (): HTMLDialogProposeInstallElement;
  };

  interface HTMLDialogRejectInstallElement extends Components.DialogRejectInstall, HTMLStencilElement {}
  var HTMLDialogRejectInstallElement: {
    prototype: HTMLDialogRejectInstallElement;
    new (): HTMLDialogRejectInstallElement;
  };

  interface HTMLNodeListenerElement extends Components.NodeListener, HTMLStencilElement {}
  var HTMLNodeListenerElement: {
    prototype: HTMLNodeListenerElement;
    new (): HTMLNodeListenerElement;
  };

  interface HTMLWebthreeConnectorElement extends Components.WebthreeConnector, HTMLStencilElement {}
  var HTMLWebthreeConnectorElement: {
    prototype: HTMLWebthreeConnectorElement;
    new (): HTMLWebthreeConnectorElement;
  };

  interface HTMLWidgetCardElement extends Components.WidgetCard, HTMLStencilElement {}
  var HTMLWidgetCardElement: {
    prototype: HTMLWidgetCardElement;
    new (): HTMLWidgetCardElement;
  };

  interface HTMLWidgetConnectionElement extends Components.WidgetConnection, HTMLStencilElement {}
  var HTMLWidgetConnectionElement: {
    prototype: HTMLWidgetConnectionElement;
    new (): HTMLWidgetConnectionElement;
  };

  interface HTMLWidgetDevFlagsElement extends Components.WidgetDevFlags, HTMLStencilElement {}
  var HTMLWidgetDevFlagsElement: {
    prototype: HTMLWidgetDevFlagsElement;
    new (): HTMLWidgetDevFlagsElement;
  };

  interface HTMLWidgetDialogElement extends Components.WidgetDialog, HTMLStencilElement {}
  var HTMLWidgetDialogElement: {
    prototype: HTMLWidgetDialogElement;
    new (): HTMLWidgetDialogElement;
  };

  interface HTMLWidgetErrorMessageElement extends Components.WidgetErrorMessage, HTMLStencilElement {}
  var HTMLWidgetErrorMessageElement: {
    prototype: HTMLWidgetErrorMessageElement;
    new (): HTMLWidgetErrorMessageElement;
  };

  interface HTMLWidgetHeaderElement extends Components.WidgetHeader, HTMLStencilElement {}
  var HTMLWidgetHeaderElement: {
    prototype: HTMLWidgetHeaderElement;
    new (): HTMLWidgetHeaderElement;
  };

  interface HTMLWidgetLogoElement extends Components.WidgetLogo, HTMLStencilElement {}
  var HTMLWidgetLogoElement: {
    prototype: HTMLWidgetLogoElement;
    new (): HTMLWidgetLogoElement;
  };

  interface HTMLWidgetScreenElement extends Components.WidgetScreen, HTMLStencilElement {}
  var HTMLWidgetScreenElement: {
    prototype: HTMLWidgetScreenElement;
    new (): HTMLWidgetScreenElement;
  };

  interface HTMLWidgetSpinnerElement extends Components.WidgetSpinner, HTMLStencilElement {}
  var HTMLWidgetSpinnerElement: {
    prototype: HTMLWidgetSpinnerElement;
    new (): HTMLWidgetSpinnerElement;
  };

  interface HTMLWidgetTooltipElement extends Components.WidgetTooltip, HTMLStencilElement {}
  var HTMLWidgetTooltipElement: {
    prototype: HTMLWidgetTooltipElement;
    new (): HTMLWidgetTooltipElement;
  };

  interface HTMLElementTagNameMap {
    'account-deposit': HTMLAccountDepositElement
    'account-edit': HTMLAccountEditElement
    'account-eth-form': HTMLAccountEthFormElement
    'account-exchange': HTMLAccountExchangeElement
    'account-register': HTMLAccountRegisterElement
    'app-home': HTMLAppHomeElement
    'apps-list-item': HTMLAppsListItemElement
    'apps-list': HTMLAppsListElement
    'app-root': HTMLAppRootElement
    'dapp-container': HTMLDappContainerElement
    'form-button': HTMLFormButtonElement
    'form-container': HTMLFormContainerElement
    'form-input': HTMLFormInputElement
    'header-account-info': HTMLHeaderAccountInfoElement
    'header-account': HTMLHeaderAccountElement
    'header-balance': HTMLHeaderBalanceElement
    'header-content': HTMLHeaderContentElement
    'header-drawer': HTMLHeaderDrawerElement
    'layout-header': HTMLLayoutHeaderElement
    'dialog-insufficient-funds': HTMLDialogInsufficientFundsElement
    'dialog-propose-install': HTMLDialogProposeInstallElement
    'dialog-reject-install': HTMLDialogRejectInstallElement
    'node-listener': HTMLNodeListenerElement
    'webthree-connector': HTMLWebthreeConnectorElement
    'widget-card': HTMLWidgetCardElement
    'widget-connection': HTMLWidgetConnectionElement
    'widget-dev-flags': HTMLWidgetDevFlagsElement
    'widget-dialog': HTMLWidgetDialogElement
    'widget-error-message': HTMLWidgetErrorMessageElement
    'widget-header': HTMLWidgetHeaderElement
    'widget-logo': HTMLWidgetLogoElement
    'widget-screen': HTMLWidgetScreenElement
    'widget-spinner': HTMLWidgetSpinnerElement
    'widget-tooltip': HTMLWidgetTooltipElement
  }

  interface ElementTagNameMap {
    'account-deposit': HTMLAccountDepositElement;
    'account-edit': HTMLAccountEditElement;
    'account-eth-form': HTMLAccountEthFormElement;
    'account-exchange': HTMLAccountExchangeElement;
    'account-register': HTMLAccountRegisterElement;
    'app-home': HTMLAppHomeElement;
    'apps-list-item': HTMLAppsListItemElement;
    'apps-list': HTMLAppsListElement;
    'app-root': HTMLAppRootElement;
    'dapp-container': HTMLDappContainerElement;
    'form-button': HTMLFormButtonElement;
    'form-container': HTMLFormContainerElement;
    'form-input': HTMLFormInputElement;
    'header-account-info': HTMLHeaderAccountInfoElement;
    'header-account': HTMLHeaderAccountElement;
    'header-balance': HTMLHeaderBalanceElement;
    'header-content': HTMLHeaderContentElement;
    'header-drawer': HTMLHeaderDrawerElement;
    'layout-header': HTMLLayoutHeaderElement;
    'dialog-insufficient-funds': HTMLDialogInsufficientFundsElement;
    'dialog-propose-install': HTMLDialogProposeInstallElement;
    'dialog-reject-install': HTMLDialogRejectInstallElement;
    'node-listener': HTMLNodeListenerElement;
    'webthree-connector': HTMLWebthreeConnectorElement;
    'widget-card': HTMLWidgetCardElement;
    'widget-connection': HTMLWidgetConnectionElement;
    'widget-dev-flags': HTMLWidgetDevFlagsElement;
    'widget-dialog': HTMLWidgetDialogElement;
    'widget-error-message': HTMLWidgetErrorMessageElement;
    'widget-header': HTMLWidgetHeaderElement;
    'widget-logo': HTMLWidgetLogoElement;
    'widget-screen': HTMLWidgetScreenElement;
    'widget-spinner': HTMLWidgetSpinnerElement;
    'widget-tooltip': HTMLWidgetTooltipElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
