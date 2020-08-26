from selenium import webdriver
browser = webdriver.Chrome('/home/ifedayo/Downloads/chromedriver')
browser.get('https://api.whatsapp.com/send?phone=08106261649&text=ss')
elem = browser.find_element_by_link_text('Cancel')
elem.click()
