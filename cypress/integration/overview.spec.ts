describe('Overview of created tests', () => {
  before(() => {
    cy.cleanInstall();
  });

  beforeEach(() => {
    cy.login();
    cy.disableTooltips();
  });

  afterEach(() => {
    cy.logout();
  });

  it('Lists inline tests created in posts / pages', () => {
    // create new post
    cy.visitAdmin('post-new.php?skipOnboarding=1');

    // Enter a title
    cy.get('#post-title-0')
      .type('Inline test post', { force: true });

    // add default test
    cy.addBlockInEditor('A/B Test');

    // save post
    cy.savePost();

    // open A/B Testing menu
    cy.contains('A/B Testing')
      .click();

    // shows test in list
    cy.contains('Inline test post');
  });

  it('Lists stand alone tests', () => {
    cy.visitAdmin('post-new.php?post_type=abt4wp-test&skipOnboarding=1');

    // wait for test to get focus
    cy.focusBlock();

    // fill in title
    cy.get('#post-title-0')
      .type('Stand alone test', { force: true });

    // save test
    cy.savePost();

    // open A/B Testing menu
    cy.contains('A/B Testing')
      .click();

    // shows test in list
    cy.contains('Stand alone test');
  });
});
